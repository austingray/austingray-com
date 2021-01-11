package database

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"os"

	// needed for postgres
	_ "github.com/lib/pq"
)

// JSONResponse format for the response object
type JSONResponse struct {
	Status string
}

// Handler tests the database connection
func Handler(w http.ResponseWriter, r *http.Request) {
	user := os.Getenv("DATABASE_USER")
	dbname := os.Getenv("DATABASE_NAME")
	password := os.Getenv("DATABASE_PASS")
	host := os.Getenv("DATABASE_ADDR")
	
	connStr := "user="+user+" dbname="+dbname+" password="+password+" host="+host+" sslmode=enable"
	
	db, err := sql.Open("postgres", connStr )
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	profile := JSONResponse{"Ok!"}

  	j, err := json.Marshal(profile)
	
	  if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

  	w.Header().Set("Content-Type", "application/json")
  	w.Write(j)
}
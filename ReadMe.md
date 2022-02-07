### add cat to db

curl -X POST http://localhost:9000/catsDB/add -H "Content-Type: application/json" -d{\"catName\":\"Berta\",\"catBreed\":\"British shorthair\"} 


### view cats currently in db

curl --header "Content-Type: application/json" --request GET http://localhost:9000/catsDB/list


### convert cat age to human age using API

curl --header "Content-Type: application/json" --request POST --data '{"age": "8"}' http://localhost:9000/catsAPI/convertage
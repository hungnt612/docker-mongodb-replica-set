rsconf = {
    _id: "rs0",
    members: [{
            "_id": 0,
            "host": "107.22.130.207:27017",
            "priority": 3
        },
        {
            "_id": 1,
            "host": "107.22.130.207:27018",
            "priority": 2
        },
        {
            "_id": 2,
            "host": "107.22.130.207:27019",
            "priority": 1
        }
    ]
}

rs.initiate(rsconf);
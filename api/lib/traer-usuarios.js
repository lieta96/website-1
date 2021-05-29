const request = require('request')


function getTraerUsuarios(req,res) {

    return (

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {return data.filter(data=>data.userId=6).slice(0, 4)  })
        .catch(err => {
            console.log(err)
            res.status(500).end()
          })
    )

}

module.exports = {getTraerUsuarios }


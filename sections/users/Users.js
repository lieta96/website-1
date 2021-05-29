import React from 'react';
// import {useState,useEffect} from 'react';

function Users(){
    
    // La petición a la API la resolví de esta manera, intenté implementarla dentro del componenete pero no me funcionó.

    // const [users,setUsers]= useState([]);

    // useEffect(() =>{
        
    //     fetch ('https://jsonplaceholder.typicode.com/posts')
    //         .then (res => res.json())
    //         .then (data => data.filter (data=>data.userId=6))
    //         .then (data=> data.slice(0, 4))
    // }, []);
    
    // En su lugar para poder trabajar con la parte de front copié los usuarios con los que debía trabajar.

    const users= [   
        {userId: 6, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},

        {userId: 6, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},

        {userId: 6, id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"},

        {userId: 6, id: 4, title: "eum et est occaecati", body: "ullam et saepe reiciendis voluptatem adipisci↵sit … ipsam iure↵quis sunt voluptatem rerum illo velit"}
    ]
       
    return (
        
        <section className="users-section">
            
            <h2 className="section-title">Usuarios</h2>
            
            <div className="users-container">

                {users.map((user)=>
                    <div key= {user.id} className="single-user-container" id={user.id} >                        
                        <img className='user-image' src={'../static/assets/user/color-user.svg'} alt='userlogo' />
                        <h3 className='subtitle'> {user.title}</h3>
                        <span className='subtext'>{user.body}</span>
                    
                    </div>
                )}

            </div>
           
            <style jsx>{`

            .users-section .section-title{
                color: #383737;
            }

            .section-title{
                margin-bottom:20px
            }

            .users-container{
                max-width:1000px;
                margin:auto;
                display:flex;
                flex-wrap:wrap;
                justify-content:space-evenly;
                text-align:center;
                align-items:flex-start
            }

            .user-image{
                width:70px;
            }

            .single-user-container{
                width:300px;
                background-color:#efefef;
                margin:30px 20px;
                border-radius:10px;
                padding:20px;
            }
            
            #2.single-user-container{
                order:4
            }

            .users-container h3{
                padding:20px
            }

            @media (max-width:480px){
                .single-user-container{
                    width:100%;
                    margin: 30px 0;
                }
            }

            `}
                
            </style>

        </section>
    )
}

export default Users
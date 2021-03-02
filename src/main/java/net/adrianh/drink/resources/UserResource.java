/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.adrianh.drink.resources;

import javax.ejb.EJB;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import net.adrianh.drink.model.dao.UserDAO;
import net.adrianh.drink.model.entity.User;


/**
 * @author andra
 */

@Path("user")
public class UserResource {
   
    @EJB
    private UserDAO userDAO;
      
      
    @POST 
    @Path("/{name}/{pw}/{confpw}")
    public Response addUser(@PathParam("name") String name, 
                       @PathParam("pw") String pw,
                       @PathParam("confpw") String confpw){
        
        if(name.isEmpty() || pw.isEmpty() || confpw.isEmpty()){
            return Response.status(Response.Status.BAD_REQUEST).entity("Empty fields.").build();
        }
        else if(!pw.equals(confpw)){
            return Response.status(Response.Status.BAD_REQUEST).entity("Passwords not equal.").build();

        } else{
            User user = new User();
            user.setName(name);
            user.setPassword(pw);

            userDAO.create(user);
           
            return Response.status(Response.Status.OK).entity("User created!").build();
        }  
    }
   
}

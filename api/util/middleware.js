import jwt from "jsonwebtoken"
import { unauthorizedResponse } from "./response.js";

export const isAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return unauthorizedResponse(res) // Unauthorized
    }
  
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user;

      if (!user.isAdmin){
        return unauthorizedResponse(res) // Unauthorized
      }
      
      next();
    });
}

export const isUser = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return unauthorizedResponse(res) // Unauthorized
  }

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    req.user = user;
    
    next();
  });
}
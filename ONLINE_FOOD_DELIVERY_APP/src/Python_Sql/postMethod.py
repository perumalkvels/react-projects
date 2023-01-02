import logging
import json

def postMethod(mydb,path,req_data):

    res = mydb.cursor(buffered=True,dictionary = True)

    if path == '/create' :
            sql = "insert into food_list (foodTitle,foodDes,foodImg,foodPrice,foodBrand,foodType) values (%s,%s,%s,%s,%s,%s)"
            user = (req_data.get('foodTitle'), req_data.get('foodDes'), req_data.get('foodImg'),
                    req_data.get('foodPrice'),req_data.get('foodBrand'),req_data.get('foodType'))
            res.execute(sql, user)
            mydb.commit()
            res.close()
            logging.warning("Record inserted successfully")
            return "Record inserted successfully"

    elif path == '/registerUser' :

            sql = "insert into user_details (id,name,email,password,aadhar,street,area,city,phoneNo,pin) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
            user = (req_data.get('id'), req_data.get('name'), req_data.get('email'),
            req_data.get('password'),req_data.get('aadhar'),req_data.get('street'),req_data.get('area'),
            req_data.get('city'),req_data.get('phoneNo'),req_data.get('pin'))
            res.execute(sql, user)
            mydb.commit()
            res.close()
            logging.warning("Register successfully")
            return "Register successfully"
    
    elif path == '/loginUser' :

            user = (req_data.get('email'),req_data.get('password'))
            sql = "SELECT * FROM user_details WHERE email=%s AND password=%s"
            res.execute(sql, user)
            result = json.dumps(res.fetchall())
            print(result)

            if len(result) != 0 :
                sql1 = "UPDATE user_details SET login_status='online' WHERE email=%s AND password=%s"
                res.execute(sql1, user)
            mydb.commit()
            res.close()
            
            logging.warning("Login Successfully")
            return result
    


    elif path == '/addtocart' : 

            user = (json.dumps(req_data.get("cartList")))
            print(user)
            sql = "UPDATE user_details SET cart_Items=%s WHERE login_status = 'online'"
            res.execute(sql,(user,))
            mydb.commit()
            res.close()
            logging.warning("Added to Cart Successfully")



            

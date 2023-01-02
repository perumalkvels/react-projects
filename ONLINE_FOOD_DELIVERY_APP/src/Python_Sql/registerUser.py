import logging



def registerUser(mydb, req_data):

    sql = "insert into user_details (id,name,email,password,aadhar,street,area,city,phoneNo,pin) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    user = (req_data.get('id'), req_data.get('name'), req_data.get('email'),
            req_data.get('password'),req_data.get('aadhar'),req_data.get('street'),req_data.get('area'),
            req_data.get('city'),req_data.get('phoneNo'),req_data.get('pin'))
    res = mydb.cursor(dictionary = True)
    res.execute(sql, user)
    mydb.commit()
    res.close()
    logging.warning("Record inserted successfully")
    return "Record inserted successfully"
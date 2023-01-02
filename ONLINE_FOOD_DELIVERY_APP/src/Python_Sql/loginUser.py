import logging
import json

def loginUser(mydb, req_data):
    
    # sql = "SELECT COUNT(email and password) FROM  where email=%s and password=%s"
    
    user = (req_data.get('email'),req_data.get('password'))
    res = mydb.cursor(buffered=True,dictionary = True)

    sql = "SELECT * FROM user_details WHERE email=%s AND password=%s"
    res.execute(sql, user)
    result = json.dumps(res.fetchall())
    mydb.commit()

    sql1 = "UPDATE user_details SET login_status='online' WHERE email=%s AND password=%s"
    res.execute(sql1,user)
    mydb.commit()

    res.close()

    logging.warning("Login Successfully")
    return result
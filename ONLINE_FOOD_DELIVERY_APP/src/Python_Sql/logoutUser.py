import logging

def logoutUser(mydb):
    
    res = mydb.cursor(buffered=True,dictionary = True)
    sql1 = "UPDATE user_details SET login_status='offline' WHERE login_status='online'"
    res.execute(sql1)
    mydb.commit()
    res.close()
    logging.warning("logout Successfully")
    return 'logout Successfully'
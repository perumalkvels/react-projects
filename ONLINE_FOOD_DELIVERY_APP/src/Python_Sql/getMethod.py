import logging
import json

def getMethod(mydb,path):

    if path == '/read' : 
        sql_query = "SELECT * from food_list"
    elif path == '/checkLoginStatus' :
        sql_query = "SELECT * FROM user_details WHERE login_status='online'"
    elif path == '/logoutUser' :
        sql_query = "UPDATE user_details SET login_status='offline' WHERE login_status='online'"
        

    res = mydb.cursor(buffered=True,dictionary = True)
    res.execute(sql_query)
    result = json.dumps(res.fetchall())
    logging.warning(result)
    return result

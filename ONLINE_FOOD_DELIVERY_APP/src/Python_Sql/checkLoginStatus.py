import logging
import json

def checkLoginStatus(mydb):
    
    sql_query = "SELECT * FROM user_details WHERE login_status='online'"
    res = mydb.cursor(dictionary = True)
    res.execute(sql_query)
    result = json.dumps(res.fetchall())
    print(result)
    logging.warning(result)
    return result
import logging
import json

def read(mydb):
    
    sql_query = "SELECT * from food_list"
    res = mydb.cursor(dictionary = True)
    res.execute(sql_query)
    result = json.dumps(res.fetchall())
    logging.warning(result)
    return result

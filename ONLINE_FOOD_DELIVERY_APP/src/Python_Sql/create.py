import logging


def create(mydb, req_data):
    sql = "insert into food_list (foodTitle,foodDes,foodImg,foodPrice,foodBrand,foodType) values (%s,%s,%s,%s,%s,%s)"
    user = (req_data.get('foodTitle'), req_data.get('foodDes'), req_data.get('foodImg'),
            req_data.get('foodPrice'),req_data.get('foodBrand'),req_data.get('foodType'))
    res = mydb.cursor(dictionary = True)
    res.execute(sql, user)
    mydb.commit()
    res.close()
    logging.warning("Record inserted successfully")
    return "Record inserted successfully"
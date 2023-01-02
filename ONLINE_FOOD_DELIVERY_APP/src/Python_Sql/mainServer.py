from http.server import HTTPServer, BaseHTTPRequestHandler
import mysql.connector
from getMethod import getMethod
from postMethod import postMethod


import logging
import json
logging.basicConfig(format = '%(asctime)s | %(filename)s: %(message)s', level = logging.NOTSET)

def db_connect():
    return mysql.connector.connect(host = "localhost", user = "root", password = '', database = "food_app")

class GetHandler(BaseHTTPRequestHandler):

    def do_GET(self):

            try:
                if db_connect().is_connected():
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin','*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(getMethod(db_connect(),self.path), "utf-8"))

            except mysql.connector.Error as error:

                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))

    def do_POST(self):

            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin','*')
                    self.end_headers()
                    # call create function from create file
                    self.wfile.write(bytes(postMethod(db_connect(),self.path,req_data), "utf-8"))

            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))

def main():
    httpd = HTTPServer(('localhost', 4000), GetHandler)
    print("Web server Successfully started")
    httpd.serve_forever()


if __name__ == "__main__":
    main()
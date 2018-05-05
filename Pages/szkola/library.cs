using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HomePage.Pages.szkola
{
    public class Book
    {
        public int id { get; set; }
        public string title { get; set; }
        public string author { get; set; }
        public string year { get; set; }
        public string pages { get; set; }
    }
    [Route("api/[controller]")]
    public class library : Controller
    {
        public MySqlConnectionStringBuilder connection = new MySqlConnectionStringBuilder()
        {
            Server = "80.211.199.99",
            UserID = "root",
            Password = "Kubawich1",
            Database = "szkola",
            SslMode = MySqlSslMode.None
        };

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/library/api/library/Dziady/AdamMickiewicz/1860/290
        [Route("api/[controller]/{title}/{author}/{year}/{pages}")]
        [HttpGet]
        public string Get(string title, string author, string year, string pages)
        {
            try
            {
                MySqlConnection conn = new MySqlConnection(connection.ToString());
                MySqlCommand cmd;
                cmd = new MySqlCommand($"INSERT INTO library(title,author,year,pages) values('{title}','{author}','{year}',{pages})", conn);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
                return "success";
            }
            catch { return null; }
        }

        // GET api/library/api/library/Dziady/AdamMickiewicz/1860/290
        [Route("api/[controller]/get/{type}/{query}")]
        [HttpGet]
        public Book Get(int type,string query)
        {
            try
            {
                Book book;
                MySqlConnection conn = new MySqlConnection(connection.ToString());
                MySqlCommand cmd;
                if (type == 1)
                {
                    cmd = new MySqlCommand($"SELECT * FROM library WHERE title = '{query}'", conn);
                    conn.Open();
                    MySqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        return book = new Book
                        {
                            title = reader["title"].ToString(),
                            author = reader["author"].ToString(),
                            year = reader["year"].ToString(),
                            pages = reader["pages"].ToString()
                        };
                    }
                    conn.Close();
                    return new Book();
                }
                else if(type == 2)
                {
                    cmd = new MySqlCommand($"SELECT * FROM library WHERE author = '{query}'", conn);
                    conn.Open();
                    MySqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        return book = new Book
                        {
                            title = reader["title"].ToString(),
                            author = reader["author"].ToString(),
                            year = reader["year"].ToString(),
                            pages = reader["pages"].ToString()
                        };
                    }
                    conn.Close();
                    return new Book();
                }
                else if (type == 3)
                {
                    cmd = new MySqlCommand($"SELECT * FROM library WHERE year = '{query}'", conn);
                    conn.Open();
                    MySqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        return book = new Book
                        {
                            title = reader["title"].ToString(),
                            author = reader["author"].ToString(),
                            year = reader["year"].ToString(),
                            pages = reader["pages"].ToString()
                        };
                    }
                    conn.Close();
                    return new Book();
                }
                else if (type == 4)
                {
                    cmd = new MySqlCommand($"SELECT * FROM library WHERE pages = '{query}'", conn);
                    conn.Open();
                    MySqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        return book = new Book
                        {
                            title = reader["title"].ToString(),
                            author = reader["author"].ToString(),
                            year = reader["year"].ToString(),
                            pages = reader["pages"].ToString()
                        };
                    }
                    conn.Close();
                    return new Book();
                }

                return new Book();
            }
            catch { return null; }
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

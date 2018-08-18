using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace HomePage.Pages
{
    public class Post
    {
        public int id { get; set; }
        public string post_name { get; set; }
        public string post_content { get; set; }
        public string time_created { get; set; }
    }
    [Route("api/[controller]")]
    public class posts : Controller
    {
        public MySqlConnectionStringBuilder connection = new MySqlConnectionStringBuilder()
        {
            Server = "80.211.199.99",
            UserID = "root",
            Password = "Kubawich1",
            Database = "posts",
            SslMode = MySqlSslMode.None
        };

        //Return all posts
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        { 
            return new string[] { "value1", "value2" };
        }

        //Return post with given id
        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Post Get(int id)
        {
            Post post;
            id = Convert.ToUInt16(id);
            MySqlConnection conn = new MySqlConnection(connection.ToString());
            MySqlCommand cmd;
            cmd = new MySqlCommand($"SELECT id, post_name, post_content, time_created FROM entries WHERE id={id}", conn);
            conn.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                  return post = new Post
                {
                    id = int.Parse(reader["id"].ToString()),
                    post_name = reader["post_name"].ToString(),
                    post_content = reader["post_content"].ToString(),
                    time_created = reader["time_created"].ToString()
                };
            }
            conn.Close();
            return new Post(); 
        }
    }
}

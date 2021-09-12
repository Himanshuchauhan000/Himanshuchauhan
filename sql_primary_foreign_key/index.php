<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "demo";

$conn = new mysqli($servername, $username, $password,$database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $conn ->select_db($database) or die( "Unable to select database");

$user='
SELECT salesman.commission FROM customer,salesman WHERE salesman.salesman_id = customer.salesman_id AND grade="100"
';


$result = mysqli_query($conn,$user);

  ?>
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
  <div class="table">
  <table border=1 class="t1">
      <tr>
          <!-- <th>Id</th> -->
          <th>Customer Name</th>
          
      </tr>
      <?php
  
      while($row = $result->fetch_assoc()) {
          echo "<tr> 
          <td>" . $row["commission"]. "</td>

          </tr>";
          /*
                   <td>" . $row["Name"]. "</td>
           <td>" . $row["Phone"]. "</td>
          */
      }    
      ?>
  </table>
  </div>
  </body>
  </html>

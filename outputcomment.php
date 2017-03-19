<?php



        $host = 'localhost';
        $user = 'qeigzeig_pweyand';
        $pswd = 'X4|J;mnH3x]H:xX';
        $datb = 'qeigzeig_defaultmain';
        
        $db = mysqli_connect($host,$user,$pswd,$datb);
 
// Attempt select query execution
$sql = "SELECT * FROM platypustable";
if($result = mysqli_query($db, $sql)){
    if(mysqli_num_rows($result) > 0){

        echo "<div class = 'platypustable'>";
        echo "<table>";

        //echo "<div style='color:#FFA500;'>";

            echo "<tr>";
                echo "<th>name</th>";
                echo "<th>email</th>";
                echo "<th>comment</th>";
            echo "</tr>";

        //echo "</div>";

        while($row = mysqli_fetch_array($result)){

     //   echo "<div style='color:#8B4513;'>";

            echo "<tr>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['email'] . "</td>";
                echo "<td>" . $row['comment'] . "</td>";
            echo "</tr>";

      //  echo "</div>";
        }
        echo "</table>";
        echo "</div>";
        // Close result set
        mysqli_free_result($result);
    } else{
        echo "No records matching your query were found.";
    }
} else{
    echo "ERROR: Was not able to execute $sql. " . mysqli_error($link);
}
 

?>
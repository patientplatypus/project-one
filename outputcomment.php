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


        echo "<div class = 'container'>";
        echo "<h3>thanks for sending a message!</h3>";
        echo "<p>I've conveniently included a list of everyone else&rsquo;s comments (and emails!) so you can have fun emailing each other about how awesome platypuses are!!!</p>";
        echo "</div>";



        echo "<div class = 'container'>";
        echo "<table class='table'>";

        //note that table inverse does nothing
        //if the text is already light on black 
        //background
            echo "<thead class='thead-inverse'>";
                echo "<tr>";
                    echo "<th class='col-md-4'>name</th>";
                    echo "<th class='col-md-4'>email</th>";
                    echo "<th class='col-md-4'>comment</th>";
                echo "</tr>";
            echo "</thead>";
      

        while($row = mysqli_fetch_array($result)){

            echo "<tr>";
                echo "<td class='col-md-4'>" . $row['name'] . "</td>";
                echo "<td class='col-md-4'>" . $row['email'] . "</td>";
                echo "<td class='col-md-4'>" . $row['comment'] . "</td>";
            echo "</tr>";

 
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
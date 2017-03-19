<?php 
		



		$host = 'localhost';
		$user = 'qeigzeig_pweyand';
		$pswd = 'X4|J;mnH3x]H:xX';
		//$pswd = 'Fvnjtyb1!!';
		$datb = 'qeigzeig_defaultmain';

 		$db = mysqli_connect($host,$user,$pswd,$datb);

 		if (mysqli_connect_errno())
 		{
 			printf("Connect failed:$s\n", mysqli_connect_errno());
 			exit();
 		}




		$users_name = $_POST['name'];
		$users_email = $_POST['email'];
		$users_comment = $_POST['comment']; 

		print($users_name);
		print($users_email);
		print($users_comment);
		var_dump($_GET, $_POST);
	//	exit;

		
		// I wanted to make a check to find if someone wasn't filling in part of the form, but I can't get it to work.

		if(empty($users_name) || empty($users_email) ||  empty($users_comment))
		{

		}
		else
		{

		//clean input variables to prevent sql injection attack

  		$users_name = mysqli_real_escape_string($db, $users_name);
  		$users_email = mysqli_real_escape_string($db, $users_email);
  		$users_comment = mysqli_real_escape_string($db, $users_comment);


		// INSERT INTO `qeigzeig_defaultmain`.`CommentsTable` (`name`, `email`, `website`, `comment`) VALUES ('r', 'r', 'r', 'r');


  		mysqli_query($db, "INSERT INTO platypustable (name, email, comment) VALUES ('$users_name', '$users_email', '$users_comment');");


		$users_name = NULL;
		$users_email = NULL;
		$users_comment = NULL;

  	}

	?>

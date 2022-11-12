<?php
// php est utiliser cote serveur
// on commence toujours une variable par $ en php 
$servername = "localhost"; // nom du serveur
// le DHCP commence toujours par 192.168.x.x lorsqu'on est chez sois
$username = "root"; //nom d'utilisateur de la base de donnees (utilise pour phpmyAdmin)
$password =""; //mot de passe 

$dbname = "avis"; // nom de la base de donnees 

//connexion à la base de donnees
$conn = mysqli_connect($servername, $username, $password, $dbname);
//on va checker si la connexion est active 
if (!$conn){ // le "!" correspond à different
    die("connexion fail".mysqli_connect_error());  // ça correspond à une alerte en php
    // on fait de la concatenation avec le "." en php
}
//on va debueuguer (var_dump) ses envoies en HTML
//var_dump($_POST);
//INSERT TO rating = inserer dans l'evalutation
// le $_POST est un tableau de données associatifs.
$sql = "INSERT INTO rating(title, description, note)
        VALUES ('".$_POST["titre1"]."', '".$_POST["description1"]."', '".$_POST["note"]."') 
        "; // on fait des ("") dans le $_POST car on a commencer notre script par des (""). 
    
// on va demande a la base de donnees de se connecter et d'ajouter a la table ratting les donnees que nous avons ecrite
if (mysqli_query($conn, $sql)){
    echo 'un nouvel enregistrement a ete realise avec succes'; // afficher sur l'ecran comme l'alerte
}else {
    echo "error".mysqli_error($conn);
}
mysqli_close($conn);// fermeture de la connexion

header('location: avis.html'); // renvoie vers la page avis.html
?>
// on importe un hook de react-router-dom
// qui permet de récuperer ce qu'on a passé en paramètre dans la route 
// c'est grâce à cela qu'on peut créer des urls dynamiques
// on peut mettre plusieurs paramètres, la logique sera la même 
// withRouter est un HOC 
import { useParams, Redirect, withRouter } from "react-router-dom";

// on importe React Toastify
import { toast } from "react-toastify";
// il faut toujours l'initialiser après l'import 
toast.configure();
 
const ProfileComponent = (props) => {
    const { username } = useParams();
    console.log(props);

    const handleClick = (event) => {
        event.preventDefault();
        // permet de faire une redirection dans une fonction, étant donné que Redirect est un component et ne peut etre que dans return
        props.history.push("/");
        // appel d'un toast
        toast.success("Vous avez bien été redirigé");
    }
    // on peut mettre des ternaires pour définir les urls 
    // si aucun param username n'est défini dans l'url, alors on renvoit vers Profile
    // return username ? <div>Bonjour {username} </div> : <div>Profile</div>;
    // on peut aussi définir une redirection avec Redirect 
    // ici, si username est inexistant, on renvoit sur Home 
    return username ? (
    <div>Bonjour {username}
        <button onClick={handleClick}>Go Home</button> 
    </div>
    ) : (<Redirect to="/" />
    );
};

const Profile = withRouter(ProfileComponent);

export default Profile;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
   return (
      <ProfileContainer>
         <ProfilePicture src="https://github.com/guipradocardoso.png"/>
         
         <ProfileDetails>
            <header>
               <h1>Guilherme prado</h1>

               <ExternalLink text="Github" href="#"/>

            </header>
            <p>
               Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
            <ul>
               <li>
                  <FontAwesomeIcon icon={faGithub}/>
                  guipradocardoso
               </li>
               <li>
                  <FontAwesomeIcon icon={faBuilding}/>
                  Cachoeirinha
               </li>
               <li>
                  <FontAwesomeIcon icon={faUserGroup}/>
                  123 seguidores
               </li>
            </ul>
         </ProfileDetails>
      </ProfileContainer>
   )
}
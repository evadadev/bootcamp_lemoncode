import "./styles.css";
import * as UserBusiness from "./utils";
import * as DataBusiness from "./data-business";


DataBusiness.getUsers().then((data) => {
    document.getElementById("root").innerText = "";
    const users = data;
    
  const nodes = [];
  for (let user of users) {
    const node = UserBusiness.createCharacterRow(user);
    nodes.push(node)
}

for (let node of nodes) {
    document.getElementById("root").append(node);
    UserBusiness.showCharacter(node)
  }
});




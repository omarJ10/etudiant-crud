export class Student {
  id : number;
  nom : string;
  prenom : string;
  classe : string;

  constructor(id : number = 0,nom: string = "", prenom: string = "", classe: string = "" ){
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.classe = classe;
    }
}

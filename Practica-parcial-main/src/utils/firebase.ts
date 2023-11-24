import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs
  } from "firebase/firestore";

export const addRecordatorio = async (Recordatorio: any)=>{
    try {
        const where = collection(db, "Recordatorios");
        await addDoc(where, Recordatorio);
        console.log("se añadió con éxito");
    } catch (error) {
        console.error(error);
    }
}

export const arregloRecorda = async ()=>{
    try {
        const querySnapshot = await getDocs(collection(db, "Recordatorios"));
        const arreglo: any = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          arreglo.push({id:doc.id,...data})
        });  
        return arreglo
    } catch (error) {
        console.error(error)
    }
}

export default { addRecordatorio, arregloRecorda }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
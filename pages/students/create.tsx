import MainLayout from "@/components/layouts/MainLayout";
import {useState} from "react";
import {StudentModel} from "@/models/student";

export default function CreateStudent() {

  const [formStudentData, setFormStudentData] = useState<StudentModel>({
    id: 0,
    document: '',
    names: '',
    last_names: '',
  });

  const [userCreated, setUserCreated] = useState(false)

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormStudentData((prevState) => ({...prevState, [name]: value}));
  };









  return (
    <MainLayout>
      <h3 className="text-2xl font-extrabold dark:text-white mb-5">Creación de estudiante</h3>

      <form>
        <div className="mb-6">
          <label htmlFor="document" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Documento
          </label>
          <input type="number" id="document"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="1073521836" required/>
        </div>

        <div className="mb-6">
          <label htmlFor="names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nombres
          </label>
          <input type="text" id="names"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Annie" required/>
        </div>

        <div className="mb-6">
          <label htmlFor="last_names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Apellidos
          </label>
          <input type="text" id="last_names"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Ruz Estrada" required/>
        </div>

        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Crear estudiante
        </button>
      </form>
    </MainLayout>
  )
}

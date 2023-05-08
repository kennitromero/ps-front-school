import MainLayout from "@/components/layouts/MainLayout";
import {useState} from "react";
import clientAPI from "../../../client"
import {StudentModel} from "@/models/student";

export default function EditStudent({data : {id, document, names, last_names}}: any) {

  const [formStudentData, setFormStudentData] = useState<StudentModel>({
    id,
    document,
    names,
    last_names,
  });

  const [userUpdated, setUserUpdated] = useState(false)

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormStudentData((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmitUpdateUser = async (event: any) => {
    event.preventDefault()

    const response = await clientAPI.put(`/api/1.0/students/${formStudentData.id}`, formStudentData)
    if (response.status === 200) {
      setUserUpdated(true)
      setFormStudentData({
        id: 0,
        document: '',
        names: '',
        last_names: '',
      })
    }
  }

  return (
    <MainLayout>
      <h3 className="text-2xl font-extrabold dark:text-white mb-5">Actualizar estudiante</h3>

      <form onSubmit={handleSubmitUpdateUser}>
        <div className="mb-6">
          <label htmlFor="document" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Documento
          </label>
          <input type="number" id="document" name="document"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="1073521836" value={formStudentData.document} onChange={handleChange} required/>
        </div>

        <div className="mb-6">
          <label htmlFor="names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nombres
          </label>
          <input type="text" id="names" name="names"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Annie" value={formStudentData.names} onChange={handleChange} required/>
        </div>

        <div className="mb-6">
          <label htmlFor="last_names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Apellidos
          </label>
          <input type="text" id="last_names" name="last_names"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Ruz Estrada" value={formStudentData.last_names} onChange={handleChange} required/>
        </div>

        {userUpdated && (
          <div className="p-5 mb-5 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
               role="alert">
            <span className="font-medium">¡Estudiante Actualizado!</span>
            <br/>
            Recuerda que el documento no se puede actualizar, contacto al admin.
          </div>
        )}

        <button type="submit" disabled={userUpdated}
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
                 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                 ${userUpdated ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Actualizar estudiante
        </button>
      </form>

    </MainLayout>
  )
}

export async function getServerSideProps({params}: any) {
  const response = await clientAPI.get(`/api/1.0/students/${params.userId}`);
  const body: any = response.data;

  return {
    props: {
      data: body.data
    }
  }
}
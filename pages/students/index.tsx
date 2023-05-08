import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import clientAPI from '../../client';
import {StudentModel} from "@/models/student";

export default function Index({data}: { data: StudentModel[] }) {
  return (
    <MainLayout>
      <h3 className="text-2xl font-extrabold dark:text-white">
        Listado de estudiante
        <Link href="/students/create"
              className="text-sm float-right text-yellow-200">
          Crear estudiante
        </Link>
      </h3>

      <table className="w-full text-sm text-left text-gray-500 mt-5">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #ID
          </th>
          <th scope="col" className="px-6 py-3">
            Documento
          </th>
          <th scope="col" className="px-6 py-3">
            Nombres
          </th>
          <th scope="col" className="px-6 py-3">
            Apellidos
          </th>
          <th>
            Edit
          </th>
        </tr>
        </thead>

        <tbody>
        {data.map(item => (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.id}
            </th>
            <td className="px-6 py-4">
              {item.document}
            </td>
            <td className="px-6 py-4">
              {item.names}
            </td>
            <td className="px-6 py-4">
              {item.last_names}
            </td>
            <td>
              <Link href={`/students/${item.id}/edit`}>Edit</Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const response = await clientAPI.get('/api/1.0/students');
  const body: any = response.data;

  return {
    props: {
      data: body.data
    }
  }
}
import { useRouter} from 'next/router'; 

function ClientProjectsPage() {
    const rounter = useRouter(); 
    function loadProjectHandler() {
        rounter.push({
            pathname: '/clients/[id]/[clientprojectid]', 
            query: {id: 'max', clientprojectid:'projecta'}, 
        }); 
    }

  return( <div>
    <h1>The projects of a Given Client</h1>
    <button onClick={loadProjectHandler}> Load Project</button>
  </div>);
}

export default ClientProjectsPage;

import Auditoria from "./features/auditoria/Auditoria";
import Emergencia from "./features/emergencia/Emergencia";
import Hospital from "./features/hospital/Hospital";
import Pacientes from "./features/pacientes/Pacientes";


const App = ({ op = 1 }: { op: any }) => {
  console.log({op})
  let component;
  
  switch (op) {
    case 1:
      component = <Pacientes />;
      break;
    case 2:
      component = <Hospital />;
      break;
    case 3:
      component = <Emergencia />;
      break;
    case 4:
      component = <Auditoria />;
      break;
    default:
      component = <p>Opción no válida</p>;
  }

  return <>{component}</>;
};

export default App;

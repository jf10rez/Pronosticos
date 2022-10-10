
export const LastsResults = ({ values }) => {

    if( values.length <= 0 ){
        return
    }
  return (
    <table>
      <thead>
        <tr>
          <th>Últimos|</th>
          <th>Después de...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {values?.map((val, index) => (
            <div key={index}>
              <td> {val.last} </td>
              <td> {val.after} </td>
            </div>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

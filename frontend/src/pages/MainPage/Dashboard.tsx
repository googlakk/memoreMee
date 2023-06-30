import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Dashboard:FC = () => {
    return(
        <>
            <h2>Dashboard</h2>
            <Button colorScheme='teal' variant='outline'>
          <Link to="/anzan">
              Anzan
          </Link>
      </Button>
        </>
    )
}
export default Dashboard;
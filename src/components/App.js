import React from 'react';
import Form from './Form';
import { Button } from 'element-react';

import 'element-theme-default';

const App = () => {
    return(
        <div>
        <Form />
        <Button type='primary'>Submit</Button>
        </div>
    )
};

export default App;
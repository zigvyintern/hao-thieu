import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const ItemProgress = ({percentage}) => (
<ProgressBar now={percentage} label="%(percent)s%"></ProgressBar>
);
export default ItemProgress;

//Hao
/*const now = 70;
const ItemProgress = ({content}) => (
<ProgressBar now={now} label={`${now}%`} />
);

export default ItemProgress;*/

/*import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const ItemProgress = ({content}) => (
<ProgressBar now={70} label="%(percent)s%"></ProgressBar>
);
export default ItemProgress;*/

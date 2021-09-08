import React, { useEffect, useState } from 'react';

interface Props { }

interface State { msg: string }

function User(props: Props) {
    //request data
    //State object to store Data in
    const [Data, setData] = useState<State | null>(null);
    //start requesting Data
    useEffect(() => {
        fetch("/api/users").then(r=>r.json()).then(o=>setData(o));
    }, []);
    //Display stuff
    return (
        <div className="User">
            <div className="Main-body">
                <p>
                    {Data?Data.msg:"Loading..." /*Display Aquired Data*/}
                </p>
            </div>
        </div>
    );
}

export default User;
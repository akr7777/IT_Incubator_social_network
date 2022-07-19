import React, { Suspense } from 'react';

const WithSuspense:any = (Component:any) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Component />
    </Suspense>
}
export default WithSuspense;
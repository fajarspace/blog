import { BukuListRSC } from '@components/buku-list/rsc'
import { Suspense } from 'react'

const Buku = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BukuListRSC paginate={true} />
    </Suspense>
  )
}

export default Buku

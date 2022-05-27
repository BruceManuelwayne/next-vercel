import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import Link from 'next/link'

export default function Pricing() {
  return (
    <>
    <h1> Pricing Page</h1>
              <h1 className={'title'}>
                Go to  <Link href="/">Home</Link>
              </h1>

              <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/pricing/index.js</code>
              </p>
  </>
  )
}

Pricing.getLayout = function getLayout( page ) {
    return (
      <MainLayout>
        <DarkLayout>
          { page }
        </DarkLayout>
      </MainLayout>
    )
  }
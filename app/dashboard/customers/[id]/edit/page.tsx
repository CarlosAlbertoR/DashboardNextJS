import { fetchCustomerById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/customers/edit-form';
import { Metadata } from 'next';
import NotFound from './not-found';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({
  params,
}: Readonly<{ params: { id: string } }>) {
  const id = params.id;

  const [customer] = await Promise.all([fetchCustomerById(id)]);
  if (!customer) NotFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer} />
    </main>
  );
}

import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout title="Home">
        Welcome to the home page
        <Link href="/about"><a>Go to About</a></Link>
    </Layout>
)

export default Index
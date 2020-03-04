import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="react-post" title="React Post"></PostLink>
            <PostLink slug="angular-post" title="Angular Post"></PostLink>
            <PostLink slug="vue-post" title="Vue Post"></PostLink>
        </ul>       
    </Layout>
)
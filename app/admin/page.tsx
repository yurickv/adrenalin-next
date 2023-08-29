'use client';

import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { NavLinks } from '@/const';
import { useEffect, useState } from 'react';
import { CreatedPost, Post } from '@/app/_types/post.types';
import Form from '@/components/Form';
import postHttpService from '@/app/_services/post.service';
import {
  createPostFormData,
  editPostFormData,
} from '@/app/_helpers/createFormDataForPost';
import { Loader } from '@/components/Loader';

const post = {
  id: '',
  markup: '',
  topic: '',
  title: '',
  description: '',
  image: '',
};
const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [editedPost, setEditedPost] = useState<Post>(post);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isPostSubmitted, setIsPostSubmitted] = useState<boolean>(false);

  const router = useRouter();
  useEffect(() => {
    const isLoggedCheck = async () => {
      const session = await getSession();

      if (!session?.user) {
        router.push(NavLinks[0].href);
      }
      setIsLoading(false);
    };

    const fetchPosts = async () => {
      const res = await postHttpService.getPosts({});
      setPosts(res.posts);
    };
    isLoggedCheck();
    fetchPosts();
  }, []);

  const cutStringTo30Symbols = (string: string) => {
    if (string.length > 30) {
      return string.substring(0, 30) + '...';
    }
    return string;
  };

  const editPostOnSubmit = async (post: Post) => {
    const formData = editPostFormData(post, editedPost);

    try {
      const res = await postHttpService.updatePost(post.id, formData);

      setPosts(prev =>
        prev.map(post => (post.id === res.post.id ? res.post : post))
      );
    } catch (e) {
      console.log(e);
    } finally {
      setShowModal(false);
      setIsPostSubmitted(false);
    }
  };

  const addPostOnSubmit = async (post: CreatedPost) => {
    const formData = createPostFormData(post);
    try {
      const { post } = await postHttpService.createPost(formData);
      setPosts(prev => ({ ...prev, ...post }));
    } catch (e) {
      console.log(e);
    } finally {
      setShowAddModal(false);
      setIsPostSubmitted(false);
    }
  };

  const deletePostOnSubmit = async (id: string) => {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      try {
        const deletedPost = await postHttpService.deletePost(id);
        setPosts(prev => prev.filter(post => post.id !== deletedPost.post.id));
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <section className="pb-36 pt-28 flex flex-col justify-center items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-4"
            onClick={() => {
              setEditedPost(post);
              setShowAddModal(true);
            }}
          >
            Add post
          </button>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Topic
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Markup
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr
                  key={post.id}
                  className={` ${
                    index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'
                  } border-b dark:bg-gray-900 dark:border-gray-700`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {cutStringTo30Symbols(post.title)}
                  </th>

                  <td scope="row" className="px-6 py-4">
                    {cutStringTo30Symbols(post.description)}
                  </td>
                  <td scope="row" className="px-6 py-4">
                    {post.topic}
                  </td>
                  <td scope="row" className="px-6 py-4">
                    {cutStringTo30Symbols(post.markup)}
                  </td>
                  <td scope="row" className="px-6 py-4 flex gap-2 items-center">
                    {
                      <>
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => {
                            setEditedPost(post);
                            setShowModal(true);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => deletePostOnSubmit(post.id)}
                        >
                          Delete
                        </button>
                      </>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <Form
          title="Edit"
          post={editedPost as Post}
          setShowModal={setShowModal}
          onSubmit={editPostOnSubmit}
          setIsPostSubmitted={setIsPostSubmitted}
          isPostSubmitted={isPostSubmitted}
        />
      )}
      {showAddModal && (
        <Form
          title="Add"
          post={editedPost}
          onSubmit={addPostOnSubmit}
          setShowModal={setShowAddModal}
          setIsPostSubmitted={setIsPostSubmitted}
          isPostSubmitted={isPostSubmitted}
        />
      )}
    </section>
  );
};
export default Admin;

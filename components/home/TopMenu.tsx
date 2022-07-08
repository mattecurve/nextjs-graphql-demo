import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import styles from "./../../styles/Home.module.css";
import { ArticleType, IArticle } from '../../services/article.service';

export function TopMenu(props: any) {
  const { onAddNewPost } = props;
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    setValidated(true);
    if (isValid) {
      const article: IArticle = {
        id: `${new Date().getTime()}`,
        author: 'Onkar',
        createdAt: new Date(),
        score: 1,
        updatedAt: new Date(),
        title: title,
        text: description,
        type: ArticleType.Story,
        url: url,
        ogImage: {
          url: file,
        },
      };
      onAddNewPost(article);
      handleClose();
      setValidated(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uploadFile = (event: any) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className='container-fluid'>
      <div className={styles.mainHims}>
          <h2>hims</h2>
          <div className={styles.hamburg}>
              <FontAwesomeIcon
                  style={{ height: ' auto', width: '16px' }}
                  icon={faBars}
              />
          </div>
          <button className='button button4'>
              <p>WHAT WE TREAT</p>
          </button>
          <button className='button button4' onClick={handleShow}>
              <p>Add Post</p>
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={event => setTitle(event.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={event => setDescription(event.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formURL">
                <Form.Label>URL</Form.Label>
                <Form.Control type="url" placeholder="Enter url" onChange={event => setUrl(event.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={event => uploadFile(event)} required />
              </Form.Group>
              <Button className='me-2' variant="primary" type="submit">
                Add Post
              </Button>
            </Form>
            </Modal.Body>
          </Modal>
      </div>
    </div>
  );
}

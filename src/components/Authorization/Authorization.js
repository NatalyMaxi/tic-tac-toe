import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import classes from './Authorization.module.css';
import dog from '../../images/dog.png'

const Authorization = () => {
   return (
      <section className={classes.authorization}>
         <div className={classes.authorization__container}>
            <div>
               <img src={dog} alt='Собачка' />
            </div>
            <Form
               title='Войдите в игру'
               text='Войти'
               disabled='disabled'//временно
            >
               <Input
                  name='login'
                  placeholder='Логин'
                  type="text"
                  required
                  autoComplete='login'
               />
               <Input
                  name='password'
                  placeholder='Пароль'
                  type='password'
                  required
                  autoComplete='password'
               />
            </Form>
         </div>
      </section>
   )
}

export default Authorization;
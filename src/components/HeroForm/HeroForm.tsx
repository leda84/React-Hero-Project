import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseAlias, chooseSuperPower, chooseDescription, chooseComicsAppearedIn } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@mui/material';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface HeroFormProps{
    id?: string;
    data?:{}
}

interface HeroState{
    name:string;
    alias:string;
    super_power:string;
    description:string;
    comics_appeared_in:string;
}

export const HeroForm=(props:HeroFormProps) => {
    const dispatch = useDispatch()
    let { heroData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<HeroState>(state => state.name)
    const alias = useSelector<HeroState>(state => state.alias)
    const superPower = useSelector<HeroState>(state => state.super_power)
    const description = useSelector<HeroState>(state => state.description)
    const comicsAppearedIn = useSelector<HeroState>(state => state.comics_appeared_in)
    const { register, handleSubmit } = useForm({})
    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseAlias(data.alias))  
            dispatch(chooseSuperPower(data.super_power)) 
            dispatch(chooseDescription(data.description)) 
            dispatch(chooseComicsAppearedIn(data.comics_appeared_in)) 

            await server_calls.create(store.getState())
            window.location.reload()
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name='name' placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="alias">Alias</label>
                    <Input {...register('alias')} name='alias' placeholder='Alias' />
                </div>
                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name='super_power' placeholder='Super Power' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name='description' placeholder='Description' />
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name='comics_appeared_in' placeholder='Comics Appeared In' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
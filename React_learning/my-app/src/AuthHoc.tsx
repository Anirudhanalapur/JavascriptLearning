function AuthHoc(props: any) {
    console.log(props);
    return (<>
        {props.children}
    </>)
}

export default AuthHoc
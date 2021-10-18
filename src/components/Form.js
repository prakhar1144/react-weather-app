const Form = ({submit}) => {
    return (
        <div className="container">
            <form onSubmit={submit} className="form-inline">
                <div className="row py-4">
                    <div className="col-sm-9">
                        <input name="city" className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
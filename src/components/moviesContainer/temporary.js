const [isActive, setIsActive] = useState(false)

  const giveClassName = () => {
    isActive ? (
      setBaseNameButton("purchase purchase--active purchase--"),
      setClassnameButton(baseNameButton.concat(theme.theme))

     ) : (
      setBaseNameButton("purchase purchase--"),
      setClassnameButton(baseNameButton.concat(theme.theme))
     )
  }
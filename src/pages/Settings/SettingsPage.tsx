import * as React from 'react'
import { BoxContainer } from 'src/components/Layout/BoxContainer'
import { FlexContainer } from 'src/components/Layout/FlexContainer'
import { IUser } from 'src/models/user.models'
import { UserStore } from 'src/stores/User/user.store'
import { SettingsEditForm } from './content/SettingsEdit.form'
import { ChangePasswordForm } from './content/ChangePassword.form'
import { ImportDHForm } from './content/ImportDH.form'
import { Button } from 'src/components/Button'
import { PostingGuidelines } from './content/PostingGuidelines'
import Heading from 'src/components/Heading'
import { Flex } from 'rebass'
import { Avatar } from 'src/components/Avatar'
import Text from 'src/components/Text'

interface IProps {
  user: IUser
  userStore: UserStore
}
interface IState {
  editMode: boolean
  isSaving: boolean
  user: IUser
}
export class UserSettings extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { editMode: false, isSaving: false, user: props.user }
  }

  public render() {
    const readOnly = !this.state.editMode
    console.log('user', this.state.user)

    return (
      <FlexContainer m={'0'} bg={'inherit'} flexWrap="wrap">
        <BoxContainer bg={'inherit'} p={'0'} width={[1, 1, 2 / 3]}>
          <BoxContainer mb={2}>
            <Heading small bold>
              Your details
            </Heading>
            <Flex alignItems={'center'}>
              <Avatar userName={this.state.user.userName} width="60px" />
              <Text inline bold ml={3}>
                {this.state.user.userName}
              </Text>
            </Flex>
            {/* TODO - add avatar edit form */}
            {/* TODO - add email verification resend button (if user email not verified) */}
            <ChangePasswordForm
              {...readOnly}
              userStore={this.props.userStore}
            />
            <ImportDHForm {...readOnly} />
          </BoxContainer>

          <SettingsEditForm />
        </BoxContainer>
        {/* post guidelines container */}
        <BoxContainer
          width={[1, 1, 1 / 3]}
          height={'100%'}
          bg="inherit"
          p={0}
          pl={2}
        >
          <PostingGuidelines />
          <Button
            // onClick={() => handleSubmit()}
            width={1}
            mt={3}
            variant={'secondary'}
            // variant={disabled ? 'disabled' : 'secondary'}
            // disabled={submitting || invalid}
          >
            save profile
          </Button>
        </BoxContainer>
      </FlexContainer>
    )
  }
}
